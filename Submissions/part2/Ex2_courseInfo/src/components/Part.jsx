const Part = ({part: {name, exercises}}) => {
    return(
        <p className="part">{name}: {exercises}</p>
    );
}

export default Part;