import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ShopByCategory = () => {
    const [category, setCategory] = useState();

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    // console.log(category[0]);

    return (
        <div className='max-w-[1280px] mx-auto text-center my-20'>
            <h2>Shop By Category</h2>

            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 3</Tab>
                </TabList>

                <TabPanel>
                    {
                        // category[0].map()
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ShopByCategory;