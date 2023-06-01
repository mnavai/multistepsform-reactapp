import './HeadingGroup.css';
const HeadingGroup = ({heading,ptag}) => {
    return (
        <hgroup className="form-hgroup">
            <h1 className="hgroup-heading">{heading}</h1>
            <p className="hgroup-p">{ptag}</p>
        </hgroup>
    );
}
export default HeadingGroup;