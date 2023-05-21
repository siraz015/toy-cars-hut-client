
import useTitle from '../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Gallery from '../Gallery/Gallery';
import TabC from '../ShopByCategory/TabC';
import TopSales from '../TopSales/TopSales';

const Home = () => {
    useTitle('Home')

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CustomerReview></CustomerReview>
            <TabC></TabC>
            <TopSales></TopSales>
        </div>
    );
};

export default Home;