import * as React from "react";
import Webcover from "../Components/CoverageComponent";
import ComHeader from "../Components/Header";
import DetailPcpn from "../Components/PCPNS/DetailPcpn";
import NodeViewer from "../Components/PCPNS/NodeViewer";
import PcpnsThree from "../Components/PCPNS/PspnsCatalog";

import "../scss/main.scss";

class ContainerPcpn extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
                styleCategory: "CategoryPcpn", selectedProduct: {
                styleViwer: "baseViwer" ,
                name: "Select A Node To See Itxs Data Structure Here...",
                children: [],
        },
                idProduct:  null,
        };
        }

    public handleStyleCategory() {
        if (this.state.styleCategory === "CategoryPcpnClose") {
              this.setState({ styleCategory: "CategoryPcpn",  styleViwer: "baseViwer",
             });
            } else {
            this.setState({
            styleCategory: "CategoryPcpnClose",
            styleViwer: "baseViwerClose",
            detailViwer: "StyleDetail",
            });
            }
    }
    public handleSelectProduct = (listProduct)  => {
        this.setState({
        selectedProduct: listProduct,
        });
        }

    public handleDetailProduct =  (idProduct) =>  {
        this.setState ({ idProduct});
        }

    public  render() {
        const {styleCategory , styleViwer, selectedProduct, detailViwer, idProduct} = this.state;
        return (
    <div>
         <div>
                <ComHeader rol={`PCPN's`} killsession={false} onCategoryStyle={this.handleStyleCategory} />
            <div className="mainContainer">
                <PcpnsThree
                    styleCategory={styleCategory}
                    selectedProduct={this.handleSelectProduct}
                />
                <NodeViewer
                    styleViwer={styleViwer}
                    selectedProduct={selectedProduct}
                    DetailProduct={this.handleDetailProduct}
                />
                    {
                    idProduct ?	  <DetailPcpn detailViwer={detailViwer} idProduct={idProduct}/> : "Select one product"}
            </div>
        </div>
    </div>
        );
    }
}

export default ContainerPcpn;
