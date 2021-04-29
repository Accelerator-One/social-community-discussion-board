// Environment dependencies
import React, { PureComponent } from 'react';

// Material dependencies
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { blue } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

// Component dependencies
import Post from '../cmp/Post.js';
import Avatar from '@material-ui/core/Avatar';

// Home component
class Home extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  render() {

    const styles = {
      padding: {
        'padding': '2em',
      },
      avatar: {
        backgroundColor: blue[500],
        fontSize: 'xxx-large',
        padding: '1em'
      },
      center: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
    };

    return (
      <>
        <br />
        <Grid container spacing={6}>

          <Grid item xs={12} sm={4} style={styles.padding}>

            <Paper style={{ ...styles.padding, ...styles.center }} spacing={2}>

              <Avatar variant={"circle"} style={styles.avatar}> A </Avatar>

              <Typography>
                <br />
                Aditya Thakur
              </Typography>

              <Link> View profile </Link>

            </Paper>

          </Grid>

          <Grid item xs={12} sm={8} style={styles.padding}>
            <Post />
          </Grid>
        </Grid>
      </>
    )
  }
};

export default Home;
