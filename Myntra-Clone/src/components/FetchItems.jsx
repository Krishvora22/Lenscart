import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import LoadingSpiner from "./LoadingSpiner";


function FetchItems() {
    const fetchStatus = useSelector(store => store.fetchStatus);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const loadingSppiner = setTimeout(() => {
        setLoading(false);
    }, 500);

    useEffect(() => {
       // if(fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;

        fetch("http://localhost:2203/items", {signal})
         .then((res) => res.json())
         .then(({items}) => {
            dispatch(itemActions.addInitialItems(items));
            // loadingSppiner();
         });
    }, [fetchStatus]);

    return(
        <>
         {loading && <LoadingSpiner />}
        </>
    )
}

export default FetchItems;