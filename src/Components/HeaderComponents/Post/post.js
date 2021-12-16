import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPostThunk} from "../../../Redux/Action/posts.action";
import {makeArray} from "../../Utils/helpers";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import style from "./post.module.css"
import {Box, TextField} from "@material-ui/core";
const useStyles = makeStyles(theme => ({
    select: { width: 100 , height: 50,background: "white",minHeight: "max-content", margin: "0 auto"},
    menuItem: { fontSize: 20, color: "red"},

}));

const Post = () => {
    const classes = useStyles();

    const posts = useSelector(state => state.postReducer.posts)
    const count = useSelector(state => state.postReducer.count)
    const limit = useSelector(state => state.postReducer.limit)
    const dispatch = useDispatch();

    const [post, setPost ] = useState([])
    const [page,setPage] = useState(1);
    const [pages,setPages] = useState([])
    const [currentLimit,setCurrentLimit] = useState(limit)


    const [search, setSearch] = useState('')
    const [searchedAllPosts, setSearchedAllPosts] = useState([])

    useEffect(() => {
        setPost(posts)
    })

    useEffect(()=>{
        dispatch(getPostThunk(page,currentLimit))
    }, [page,currentLimit]);

    useEffect( ()=> {
        if(count){
            setPages(makeArray(Math.ceil(count /currentLimit )))

        }
    },[count,currentLimit ])

    useEffect(() => {
        if(post){
            setSearchedAllPosts(post)
        }
    }, [post])

    return (
        <div className={style.about}>
            <div className={style.side}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch',background: "white",position:"relative",left:"80px",marginBottom: "20px" ,borderRadius: "10px" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic"
                               label="Outlined"
                               variant="outlined"
                               onChange={e => {
                                   const searchedPosts = post.filter(p => {
                                       return p.title.toLowerCase().includes(e.target.value.toLowerCase())
                                   })
                                   setSearchedAllPosts(searchedPosts)
                                   setSearch(e.target.value)
                               }}/>
                </Box>
            </div>
            <div>
                <FormControl fullWidth>
                    <InputLabel  id="demo-simple-select-label" >Age</InputLabel>
                        <Select
                            className={classes.select}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={e => setCurrentLimit(e.target.value)}
                            value={currentLimit}
                        >
                            <MenuItem className={classes.menuItem} value="10">10</MenuItem>
                            <MenuItem className={classes.menuItem} value="12">12</MenuItem>
                            <MenuItem className={classes.menuItem} value="15">15</MenuItem>
                            <MenuItem className={classes.menuItem} value="18">18</MenuItem>
                            <MenuItem className={classes.menuItem} value="20">20</MenuItem>
                        </Select>
                </FormControl>
            </div>
            <div className={style.side}>
                <ul className={style.title}>
                    {
                        searchedAllPosts.map( p => {
                            return (
                                <li key={p.id}>
                                    {p.title}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={style.pages}>
                {pages.map(s => {
                    return (
                        <div key={s} onClick={() => setPage(s) } className={page === s ? style.active : null}>
                            {s}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Post;