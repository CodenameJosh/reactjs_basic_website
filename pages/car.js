import React from 'react';
import Layout from "../layouts/layout";
import Head from "next/head";

const Car = () => (
    <Layout>
        <div>
            <Head>
                <title>Car</title>
            </Head>
        </div>
        <div className="container-fluid p-0">
            <div className="p-3"><h1>Car</h1></div>
        </div>
    </Layout>
);

export default Car
