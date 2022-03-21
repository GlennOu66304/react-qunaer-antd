import React from 'react'
import { Typography, Layout } from "antd";
export const Footer : React.FC =  () => {
    return (
        <Layout.Footer style={{textAlign:"center"}} >
        <Typography.Title level={3}>此版权归@react旅游网</Typography.Title>
        </Layout.Footer>
    );
}