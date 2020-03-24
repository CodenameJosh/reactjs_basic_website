import React from 'react';
import Layout from "../layouts/layout";
import Head from "next/head";

const About = () => (
    <Layout>
        <div>
            <Head>
                <title>About</title>
            </Head>
        </div>
        <div className="container-fluid p-0">
            <div className="p-3"><h1>About</h1></div>
        </div>
    </Layout>
);

export default About
