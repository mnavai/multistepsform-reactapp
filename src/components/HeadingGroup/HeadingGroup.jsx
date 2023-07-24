import './HeadingGroup.css';
const HeadingGroup = ({heading,ptag}) => {
    return (
        <hgroup className="form-hgroup" data-testid="hgroup">
            <h1 className="hgroup-heading" data-testid="heading">{heading}</h1>
            <p className="hgroup-p" data-testid="ptag">{ptag}</p>
        </hgroup>
    );
}
export default HeadingGroup;