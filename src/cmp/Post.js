import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';
import { blue, red } from '@material-ui/core/colors';

// Card component(s)
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

// Icon component(s)
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Asset(s)
import Comment from './Comment.js';
import TestImg from '../assets/testImg.jpg';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '600px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[500],
    fontSize: 'large',
    padding: '1em'
  }
}));

export default function RecipeReviewCard() {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            V
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Vikram Singh"
        subheader="Apr 30, 2021"
      />
      <CardMedia
        className={classes.media}
        image={TestImg}
        title="forest and wildlife"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          The dense forest of Himalayas will soothe all your frustations.
          <br />
          Trying visiting here once. You won't regret it...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={() => setLiked(!liked)} style={
            (liked) ? {
              "color": red[500]
            } : {}
          } />
        </IconButton>

        <TextField
          variant={'outlined'}
          size={'small'}
          fullWidth={true}
          placeholder='Add comment here...'
          style={{ 'maxWidth': '480px' }}>
        </TextField>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

          {/* TODO: Replace with mapper later */}
          <Comment uid="1" name="Vedika" message="I just want an iPhone!" />

          <br />

        </CardContent>
      </Collapse>
    </Card>
  );
}
