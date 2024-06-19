import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './ArtList.css';

/*
interface Art {
  number: number
  mail: string
  name: string
  op: string
  course: string
  project_name: string
  teach_name: string
  phone: string
  dmodel: string
  note: string
  comment: string
  status: string
}
*/

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

const Outart = () => {
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArts = async () => {
      let res = await axios.get(
        "/outart/",
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      setArts(res.data);
      setLoading(false);
    }

    getArts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Art List</h1>
      <div className="art-list">
        {arts.map((art) => (
          <div key={art.number} className="art-card">
            <p><strong>Number:</strong> {art.number}</p>
            <p><strong>Mail:</strong> {art.mail}</p>
            <p><strong>Name:</strong> {art.name}</p>
            <p><strong>Op:</strong> {art.op}</p>
            <p><strong>Course:</strong> {art.course}</p>
            <p><strong>Project Name:</strong> {art.project_name}</p>
            <p><strong>Teach Name:</strong> {art.teach_name}</p>
            <p><strong>Phone:</strong> {art.phone}</p>
            <p>
              <strong>DModel:</strong>
              <span title={art.dmodel}>{truncateText(art.dmodel, 30)}</span>
            </p>
            <p>
              <strong>Note:</strong>
              <span title={art.note}>{truncateText(art.note, 30)}</span>
            </p>
            <p><strong>Comment:</strong> {art.comment}</p>
            <p><strong>Status:</strong> {art.status}</p>
          </div>
        ))}
      </div>
    </div>
  );

}

export default Outart;
