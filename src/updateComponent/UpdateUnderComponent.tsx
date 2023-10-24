import React from "react";

interface UpdateComponentProps {
    
}

interface UpdateComponentState {
    toGrandChild: string;
}

class UpdateUnderComponent extends React.Component<UpdateComponentProps, UpdateComponentState> {
    constructor(props: UpdateComponentProps){
        super(props)
        this.state = {
            toGrandChild: '아직 안바뀜'
        }
        this._clickToGrandChild = this._clickToGrandChild.bind(this);
    }

    render() {
        return (
            <div>
                <Parent {...this.state} />
                <button onClick={this._clickToGrandChild}>GrandChild 의 값을 바꾸기</button>
            </div>
        )
    }

    private _clickToGrandChild(): void {
        this.setState({
          toGrandChild: '그랜드 차일드의 값을 변경'
        });
      }
}

interface ParentProp {
    toGrandChild: string;
  }
  
  const Parent: React.FC<ParentProp> = (props) => {
    return (
      <div>
        <p>여긴 Parent</p>
        <Me {...props} />
      </div>
    );
  };
  
  interface MeProp {
    toGrandChild: string;
  }
  
  const Me: React.FC<MeProp> = (props) => {
    return (
      <div>
        <p>여긴 Me</p>
        <Child {...props} />
      </div>
    );
  };
  
  interface ChildProp {
    toGrandChild: string;
  }
  
  const Child: React.FC<ChildProp> = (props) => {
    return (
      <div>
        <p>여긴 Child</p>
        <GrandChild {...props} />
      </div>
    );
  };
  
  interface GrandChildProp {
    toGrandChild: string;
  }
  
  const GrandChild: React.FC<GrandChildProp> = (props) => {
    return (
      <div>
        <p>여긴 GrandChild</p>
        <h3>{props.toGrandChild}</h3>
      </div>
    );
  };


export default UpdateUnderComponent;