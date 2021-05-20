import { useEffect, useState } from 'react'
import './Home.css'

const Home = () => {

    const [test, setTest] = useState()

    useEffect(() => {


        fetch('http://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            }
        })

            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setTest(data)
            })


    }, [])








    return (
        <section className="home">
            <h3>INI DARI HOME</h3>

            {console.log(test)}




        </section>
    )
}

export default Home 