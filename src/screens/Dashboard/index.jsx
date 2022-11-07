import React from "react";
import styles from "./style.module.css";
import PageContainer from "../../containers/PageContainer";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const data = [
    {
      name: 'JAN',
      uv: 2000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'FEB',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'MAR',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'APR',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'MAY',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'JUN',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'JUL',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'AUG',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'SEP',
      uv: 4000,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'OCT',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'NOV',
      uv: 4000,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'DEC',
      uv: 2000,
      pv: 4300,
      amt: 2100,
    },
  ];
  return <div>
    <PageContainer active="dashboard">
      <div className={styles.dashoardContainer}>
        <p>Hello, <b>ABC OIL & GAS</b></p>

        <p><b>PERFORMANCE</b></p>

        <div className={styles.chartContainer}>
          <div className={styles.chartHeader}>
            <p className={styles.revenue}>
              REVENUE
            </p>
            <div className={styles.linkContainer}>
              <p>WEEKLY</p>
              <p>MONTHLY</p>
              <p>YEARLY</p>
            </div>
          </div>
          <p>
            <b>₦2,450,000</b>
          </p>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <AreaChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />

                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#35DB9F" fill="rgba(53, 219, 159, 0.24)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </PageContainer>
  </div>;
}
