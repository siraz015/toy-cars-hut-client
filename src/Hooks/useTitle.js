import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Toy Cars Hut`;
    }, [title])
};

export default useTitle;