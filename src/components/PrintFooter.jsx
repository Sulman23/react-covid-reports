import React from "react";

const PrintFooter = () => {
  return (
    <div>
      <footer className="border-top print-footer">
        <div className="d-flex justify-content-between pt-1">
          <p>
            <strong>Phone:</strong> (012) 1234567
          </p>
          <p>
            <strong className="">Phone Lab Ext:</strong> 567
          </p>
          <p>
            <strong className="">Fax:</strong> (012) 9876543
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrintFooter;
