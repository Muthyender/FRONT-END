import React from "react";
import { Button } from "react-bootstrap";

function IncrementButton({count, setCount})
{
    return(
        <Button variant='success' onClick={() => setCount(count + 1)}>
          Increment
        </Button>
    )
}

export default IncrementButton