import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../Components/Spinner';

const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                console.log(data);
                setJob(data);
              }
              catch(error) {
                console.log("Error in fetching ", error)
              }
              finally {
                setLoading(false);
              }
        }

        fetchJob();
    }, [])

  return loading ? <Spinner /> :
  (<h1>{ job.title }</h1>)
}

export default JobPage