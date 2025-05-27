import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../Loading/Loading';

export default function Company() {
  const [load, setLoad] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setLoad(true)
    fetch(`${process.env.REACT_APP_API_URL}/company`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      }).finally(() => {
        setLoad(false)
      })
  }, []);

  function testLogin() {
    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userName: 'mogzaurige',
        password: '123'
      }),
    })
      .then((res) => res.json())
      .then((r)=>{
        console.log(r)
      })
  }
  return (
    <div className='container'>
      <button onClick={testLogin}>test login</button>
      <h3 style={{ color: "#007bff" }}><Link to={'add'}>add</Link></h3>
      {load && <Loading />}
      <div className='row'>
        {data?.map((item) => (
          <div className='col-2' key={item._id}>
            <Link
              to={item.companyId}
              className="d-flex justify-content-between"
              style={{
                width: '100%',
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div>
                <div>
                  <p style={{ lineHeight: '22px', height: '22px', overflow: 'hidden', margin: 0 }}>{item.title}</p>
                </div>
                <div>
                  <p style={{ lineHeight: '22px', height: '22px', overflow: 'hidden', margin: 0 }}>{item.companyId}</p>
                  {/* <p style={{ lineHeight: '22px', height: '22px', overflow: 'hidden', margin: 0 }}>{item.description.en}</p> */}
                </div>
              </div>


            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
