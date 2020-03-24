import React from 'react';
import Layout from "../layouts/layout";
import Head from "next/head";

const Index = () => (
    <Layout>
        <div>
            <Head>
                <title>Home</title>
            </Head>
        </div>
        <div className="container-fluid p-0">
            <div className="p-3"><h1>Home</h1></div>
        </div>
    </Layout>
);

export default Index
