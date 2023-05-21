import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blog')

    return (
        <div className='bg-gray-100'>
            <div className='max-w-[1280px] mx-auto '>
                <div className='shadow-lg p-10 my-5'>
                    <h3 className='font-bold my-2'>Question 1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <p>Answer: An access token and a refresh token are both authentication mechanisms used in client-server communication, typically in the context of web applications and APIs. They play crucial roles in ensuring secure access to protected data. We store them on the client side Cookie, Local Storage and Session Storage <br />
                        Access Token Work: <br />
                        1. Generated upon successful authentication and authorization. <br />
                        2. Used to access specific resources on a server or API. <br />
                        3. Stored securely on the client-side (e.g., cookies, local storage). <br />
                        4. Included in the authorization header of requests to access protected resources. <br />
                        5. Validated by the server to grant or deny access. <br />
                        Refresh Token Work: <br />
                        1. Issued alongside the access token during authentication. <br />
                        2. Used to obtain a new access token when the current one expires. <br />
                        3. Stored securely on the client-side. <br />
                        4. Sent to the server's token endpoint to request a token refresh. <br />
                        5. Validated by the server to issue a new access token.
                    </p>
                </div>
                <div className='shadow-lg p-10 my-5'>
                    <h3 className='font-bold my-2'>Question 2: Compare SQL and NoSQL databases?</h3>
                    <p>Answer: SQL databases: <br />
                        1. Follow a structured data model with predefined schemas and relationships between tables. <br />
                        2. Use SQL as the querying language. <br />
                        3. Enforce rigid schemas and are suitable for applications with fixed schemas and complex transactions. <br />
                        4. Scale vertically by adding resources to a single server.

                        NoSQL Databases: <br />
                        1. Support various data models (key-value, document, columnar, graph) for flexible data storage. <br />
                        2. Use different query languages specific to their data models. <br />
                        3. Offer schema flexibility, allowing dynamic changes to the data structure. <br />
                        4. Excel at horizontal scalability by distributing data across multiple servers or clusters.
                    </p>
                </div>
                <div className='shadow-lg p-10 my-5'>
                    <h3 className='font-bold my-2'>Question 3: What is express js? What is Nest JS?</h3>
                    <p>Answer: Express js: <br />
                        Express.js is a minimalistic and flexible web application framework for Node.js. It provides a straightforward and unopinionated approach to building web servers and APIs. With Express.js, developers have the freedom to design and structure their applications according to their specific needs. <br />

                        Nest JS: <br />
                        On the other hand, NestJS is a modern, progressive, and opinionated web application framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript and heavily inspired by Angular, adopting many of its architectural concepts.
                    </p>
                </div>
                <div className='shadow-lg p-10 my-5'>
                    <h3 className='font-bold my-2'>Question 4: What is MongoDB aggregate and how does it work?</h3>
                    <p>Answer: MongoDB aggregate: <br />
                        MongoDB aggregate method is a powerful feature that allows you to perform complex data processing and analysis operations on collections of documents. The aggregate method is used to construct and execute aggregation pipelines, which consist of multiple stages that transform and manipulate the data. <br />
                        MongoDB aggregate work: <br />
                        1. Data Source: The aggregate method operates on a MongoDB collection, which serves as the data source for the aggregation. <br />
                        2. Pipeline Stages: The aggregate method takes an array of pipeline stages as its argument. Each stage represents a specific operation to be performed on the data. The stages are executed in sequence, with the output of one stage becoming the input for the next. <br />
                        3. Pipeline Operators: Within each stage, you can use various aggregation operators to define the desired data manipulations. These operators perform operations like filtering, grouping, projecting, sorting, and performing mathematical or statistical calculations on the data. <br />
                        4. Output: The result of the aggregate operation is returned as a cursor, which can be iterated to access the aggregated data. Cursors provide a convenient way to handle large result sets by fetching data in batches as needed.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;