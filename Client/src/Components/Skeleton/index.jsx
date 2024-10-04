import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import styles from './index.module.scss'
export default function CardSkeleton() {
  let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  return (
   <div className={styles.cardList}>
    {array.map((e,i)=>{ 
        return  <div className={styles.card} key={i}>
            <Card   sx={{ m: 0 }}>
        <CardHeader
          avatar={
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          }
          action={null}
          title={
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          }
          subheader={<Skeleton animation="wave" height={10} width="40%" />}
        />
        {<Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />}
        <CardContent>
          {
            <React.Fragment>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          }
        </CardContent>
      </Card>
        </div>
    })}
   </div>
  );
}

CardSkeleton.propTypes = {
  loading: PropTypes.bool,
};
