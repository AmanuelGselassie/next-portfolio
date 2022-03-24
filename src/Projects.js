import { Card, CardActionArea, CardActions, CardContent, CardHeader, Chip, Fade, Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import { RepoForkedIcon, RepoIcon, StarIcon } from '@primer/octicons-react';
import Image from 'next/image'
import { useRef } from "react";
import useAnimate from "./useAnimate";

const useStyles = makeStyles(theme => ({
    cont: {
        minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
    },
    card: {
        height: '100%'
    },
    cardActionArea: {
        height: '100%',
        // display: 'grid'
    }
}))

export default function Projects({ data }) {

    const classes = useStyles()

    const animRef = useRef(null)
    const animate = useAnimate(animRef);

    console.log( data)

    return (
        <Grid direction="row-reverse" container justify="center" alignItems="center" spacing={10} className={classes.cont}>
            <Grid item xs={12} lg={6}>
                <Typography variant="h2" gutterBottom align="center" innerRef={animRef}>
                    Projects
                </Typography>
                <Hidden mdDown>
                    <Fade in={animate} style={{ transitionDelay: '250ms' }}>
                        <div>
                            <Image
                                alt="Projects"
                                src="/projects.svg"
                                width="1144"
                                height="617.32"
                            />
                        </div>
                    </Fade>
                </Hidden>
            </Grid>
            <Grid container item xs={12} lg={6} direction="row" spacing={1}>
                
                        <Grid item lg={6}  >
                            <Fade in={animate} style={{ transitionDelay: `${200 * 1}ms` }}>
                                <Card  className={classes.card}>
                                    <CardActionArea
                                        className={classes.cardActionArea}
                                        href={'https://margotmenu.herokuapp.com/'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <CardHeader
                                            title={<><RepoIcon verticalAlign='middle' /> {'Margot Menu'}</>}
                                            
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            Margot menu is an app designed to enhance the culinary dining experience by collating diner reviews and menu recommendations for individual items on a restaurant menu.
                                            The project is still being updated.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container direction="row" spacing={1}>
                                            
                                                                                        
                                            </Grid>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Fade>
                        </Grid>

                        <Grid item lg={6} > 
                            <Fade in={animate} style={{ transitionDelay: `${200 * 1}ms` }}>
                                <Card  className={classes.card}>
                                    <CardActionArea
                                        className={classes.cardActionArea}
                                        href={'https://sportxdesigns.com/'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <CardHeader
                                            title={<><RepoIcon verticalAlign='middle' /> {'Sportxdesigns'}</>}
                                            
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            Visuals provided by SportXDesign. SportXDesign is a creative 3D animation and graphic design agency based in the UK.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container direction="row" spacing={1}>
                                               
                                            </Grid>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Fade>
                         
                        </Grid>
                        <Grid item lg={6} > 
                            <Fade in={animate} style={{ transitionDelay: `${200 * 1}ms` }}>
                                <Card  className={classes.card}>
                                    <CardActionArea
                                        className={classes.cardActionArea}
                                        href={'https://www.ebay.de/str/tecexpert'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <CardHeader
                                            title={<><RepoIcon verticalAlign='middle' /> {'Tec-Expert'}</>}
                                            
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            Tec-Expert is an online shop in which i had the chance to work on to enhance the UI.This shop is made mainly by using HTML , CSS & Bootstrap .
                                            </Typography> 
                                        </CardContent>
                                        <CardActions>
                                            <Grid container direction="row" spacing={1}>
                                               
                                            </Grid>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Fade>
                         
                        </Grid>
                        <Grid item lg={6} > 
                            <Fade in={animate} style={{ transitionDelay: `${200 * 1}ms` }}>
                                <Card  className={classes.card}>
                                    <CardActionArea
                                        className={classes.cardActionArea}
                                        href={'https://mountain-expedition.vercel.app/'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <CardHeader
                                            title={<><RepoIcon verticalAlign='middle' /> {'Mountain Expedition'}</>}
                                            
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            Welcome To Mountain Expedition Club!Overseas Expeditions, UK Mountain Challenges Private guiding & Instruction.The project is still being updated.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container direction="row" spacing={1}>
                                               
                                            </Grid>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Fade>
                         
                        </Grid>


                    
                
            </Grid>
        </Grid>
    )
}
