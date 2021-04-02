import React from "react";

const Offering = ({match}) => {
    const userId = match.params.offeringID;
    return (
        <>
            <p>{userId}</p>
        </>
    );
}

export default Offering;