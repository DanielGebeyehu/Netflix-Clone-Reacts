import React from "react";
import Row from "../Row/Row";
import request from "../../../utils/requests";
const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
      title = "TRENDING" fetchUrl = {request.fetchTrending}/>
      <Row
      title = "TOP RATED" fetchUrl = {request.fetchTopRatedMovies}/>
      <Row
      title = "ACTION MOVIES" fetchUrl = {request.fetchActionMovies}/>
      <Row
      title = "COMEDY MOVIES" fetchUrl = {request.fetchComedyMovies}/>
      <Row
      title = "HORROR" fetchUrl = {request.fetchHorrorMovies}/>
        <Row
      title = "ROMANTIC MOVIES" fetchUrl = {request.fetchRomanceMovies}/>
      <Row
      title = "DOCUMENTARIES" fetchUrl = {request.fetchDocumentaries}/>
         <Row
      title = "TV SHOWS" fetchUrl = {request.fetchTvShow}/>
      
     
    </>
  );
};

export default RowList;
