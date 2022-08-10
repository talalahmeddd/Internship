import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        background: `radial-gradient(${darken(
      theme.palette.primary.dark,
      0.5
    )} 0%, ${theme.palette.primary.dark} 80%)`,
    },
    divider: {
        backgroundColor: theme.palette.getContrastText(theme.palette.primary.dark),
    },
    seller: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        marginRight: -88,
        paddingRight: 66,
        width: 480,
    },
}));

function CustomerPage() {
    const classes = useStyles();
    const [invoice, setInvoice] = useState(null);
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    });

    useEffect(() => {
        axios
            .get("/api/invoices/get-invoice", {
                params: { id: "5725a6802d" },
            })
            .then((res) => {
                setInvoice(res.data);
            });
    }, []);

    return ( <
        div className = {
            clsx(
                classes.root,
                "flex-grow flex-shrink-0 p-0 sm:p-64 print:p-0 overflow-auto"
            )
        } >
        {
            invoice && ( <
                motion.div initial = {
                    { opacity: 0, y: 200 } }
                animate = {
                    { opacity: 1, y: 0 } }
                transition = {
                    { bounceDamping: 0 } } >
                <
                Typography className = "font-light"
                variant = "h1"
                color = "textSecondary" >
                CUSTOMERS { " " } <
                /Typography>{" "} <
                Card className = "mx-auto w-xl print:w-full print:p-8 print:shadow-none rounded-none sm:rounded-20" >
                <
                CardContent className = "p-88 print:p-0" >
                <
                div className = "flex justify-between" > < /div>{" "} <
                div className = "mt-96" >
                <
                Typography className = "mb-24 print:mb-12"
                variant = "body1" > { " " } <
                /Typography>{" "} <
                div className = "flex" >
                <
                div className = "flex-shrink-0" >
                <
                img className = "w-32"
                src = "assets/images/logos/fuse.svg"
                alt = "logo" /
                >
                <
                /div>{" "} <
                Typography className = "font-normal mb-64 px-24"
                variant = "caption"
                color = "textSecondary" >
                In condimentum malesuada efficitur.Mauris volutpat placerat auctor.Ut ac congue dolor.Quisque scelerisque lacus sed feugiat fermentum.Cras aliquet facilisis pellentesque.Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus.Etiam at felis volutpat est mollis lacinia.Mauris placerat sem sit amet velit mollis, in porttitor ex finibus.Proin eu nibh id libero tincidunt lacinia et eget eros. { " " } <
                /Typography>{" "} <
                /div>{" "} <
                /div>{" "} <
                /CardContent>{" "} <
                /Card>{" "} <
                /motion.div>
            )
        } { " " } <
        /div>
    );
}

export default CustomerPage;

/**

 Use the following elements to add breaks to your pages. This will make sure that the section in between
 these elements will be printed on a new page. The following two elements must be used before and after the
 page content that you want to show as a new page. So, you have to wrap your content with them.

 Elements:
 ---------
 <div className="page-break-after"></div>
 <div className="page-break-before"></div>


 Example:
 --------

 Initial page content!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>

 This is the second page!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>

 This is the third page!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>
 * */