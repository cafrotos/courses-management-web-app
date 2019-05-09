import React from 'react';
import Layout from "./ListUser";
import './style.less'

const ClassMate = (props) => {
  let data = [
    {name: "Nguyễn Minh Phương"}
  ]
  return (
    <div className="class__mate">
      <Layout title="Giáo viên" data={data} />
      <Layout title="Học sinh" data={data} />
    </div>
  )
}

export default ClassMate