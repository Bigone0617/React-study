import React from "react";

interface UpdateUpperComponentProps {

}

interface UpdateUpperComponentState {
    fromGrandChild: string;
}

class UpdateUpperComponent extends React.Component<UpdateUpperComponentProps, UpdateUpperComponentState> {
    constructor(props: UpdateUpperComponentProps){
        super(props)
        this.state = {
            fromGrandChild: '아직 안바뀜'
          };
          this._clickFromGrandChild = this._clickFromGrandChild.bind(this);
    }

    render() {
        return (
            <div>
                <Parent clickFromGrandChild={this._clickFromGrandChild} />
                <p>{this.state.fromGrandChild}</p>
            </div>
        )
    }

    private _clickFromGrandChild(): void {
        this.setState({
          fromGrandChild: '그랜드 차일드로 부터 값이 변경되었음.'
        });
      }
}

interface ParentProp {
    clickFromGrandChild(): void;
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
    clickFromGrandChild(): void;
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
    clickFromGrandChild(): void;
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
    clickFromGrandChild(): void;
  }
  
  const GrandChild: React.FC<GrandChildProp> = (props) => {
    return (
      <div>
        <p>여긴 GrandChild</p>
        <button onClick={props.clickFromGrandChild}>GrandChild 버튼</button>
      </div>
    );
  };

export default UpdateUpperComponent;