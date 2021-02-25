import Link from 'next/link'
import Head from 'next/head'
import Layout from  '../components/layout'

export default function FirstPost() {
    return (
    <Layout>
        <Head>
            <title>This is the First Post</title>
            <meta name="description" content="This is the description of the application" />
        </Head>
        <h1>First Post</h1>
        
    </Layout>
    )
}