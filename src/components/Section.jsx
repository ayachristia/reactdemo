import '/src/style/style.scss';

export default function Section({backgroundColor, children}){
    return (
        <section className="sectionEl" style={{backgroundColor:backgroundColor}}>
            {children}
        </section>
    )
}