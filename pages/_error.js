import React from 'react';
import Layout from "../layouts/layout";
import Head from "next/head";


function Error({ statusCode }) {
    return (
        <Layout>
            <div>
                <Head>
                    <title>Error</title>
                </Head>
            </div>
            <div className="container-fluid">
                <h4 className="p-3">
                    {statusCode
                        ? `These are not the droids you are looking for. A ${statusCode} occurred on server.`
                        : 'An error occurred on client'}
                </h4>
            </div>
        </Layout>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
