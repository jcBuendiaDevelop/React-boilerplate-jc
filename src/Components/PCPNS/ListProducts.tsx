import * as React from "react";

class ListProducts extends React.Component<any> {
    constructor(props) {
        super(props);
    }

    public TeamMemberCard = (data) => {
           return <div className="cardProduct">
                     <div className="cardHeader">
                        <img className="impProduct" src={data.img} />
                          <div>
                              <h1 className="headerName" >{data.name}</h1>
                              <h3  >{data.id}</h3>
                          </div>
                      </div>
                  </div>;
             }

    public render() {

        return (
            <div onClick={this.props.onProductClick}>
                    {this.TeamMemberCard(this.props.data)}
            </div>
        );
    }
}

export default ListProducts;
