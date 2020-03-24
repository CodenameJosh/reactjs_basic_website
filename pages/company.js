import React from 'react';
import Layout from "../layouts/layout";
import Head from "next/head";

const Company = () => (
    <Layout>
        <div>
            <Head>
                <title>Company</title>
            </Head>
        </div>
        <div className="container-fluid p-0">
            <div className="p-3"><h1>Company</h1></div>
        </div>
    </Layout>
);

export default Company
