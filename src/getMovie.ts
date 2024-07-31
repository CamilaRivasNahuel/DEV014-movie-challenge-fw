export const getMovie =async ()=>{

    const url= 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
    const resp= await fetch(url,{
     headers:{
       Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2M0MmZlNGYxMGJjYzlmZTA4NmM1YzcyZjYzMzZlZCIsInN1YiI6IjY2NDc3NjAyODlhNmQ1NTlkOGQ3YzM1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wt6Pq1GE6UWX5QaS9DAGkPhSzXBF1oUwZfzRrYncXu8"
     }
    })
   const data= await resp.json();
    //console.log(data);
    return data;
   }