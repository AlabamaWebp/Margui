import { useNavigate  } from "react-router-dom";

const NotPage = () => {
    const to = "/museum";
    useNavigate()(to);

    return(<></>);
}
export default NotPage;