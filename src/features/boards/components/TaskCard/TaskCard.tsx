import {Checkbox, FormControlLabel, Paper, Typography} from "@mui/material";
import {FC} from "react";
import {createStyles, makeStyles} from "@mui/styles";


type TaskCardProps = {
    taskName: string,
    taskDescription: string
}
 const useStyles = makeStyles(( ) =>
    createStyles({
        text: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        }
        ,
    })
);

const TaskCard:FC<TaskCardProps> = ({taskName,taskDescription }) => {
    const classes = useStyles()

    return (
        <Paper elevation={2} sx={{width: '20%', borderRadius: '10px', padding: '10px', height: '150px'}}>
            <FormControlLabel
                value="end"
                control={<Checkbox />}
                label={<Typography className={classes.text}>{taskName}</Typography>}
                labelPlacement="end"
            />
            <Typography className={classes.text} sx={{color: 'text.secondary'}}>{taskDescription}</Typography>

        </Paper>
    );
};

export default TaskCard;