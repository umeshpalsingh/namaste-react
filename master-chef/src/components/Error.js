import { useRouteError } from "react-router";

const Error = () => {

    console.log(useRouteError());
    
    const {status, statusText} = useRouteError();
    
    return (
        <div>
            <h1>{status} - {statusText}</h1>
        </div>
    );
}

export default Error;