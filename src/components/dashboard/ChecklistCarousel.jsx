import ChecklistCard from "./ChecklistCard";

function ChecklistCarousel({ checklist }) {

    const items = checklist?.itemChecklistDto ?? [];

    if (items.length === 0) {
        return (
            <div className="dashboard-message">
                Nenhum aluno possui checklist registrado.
            </div>
        );
    }

    return (
        <div className="checklist-carousel">

            <div className="checklist-carousel-track">

                {items.map((item, index) => (
                    <ChecklistCard
                        key={`${checklist.id}-${item.id}-${index}`}
                        checklist={checklist}
                        item={item}
                    />
                ))}

                {items.map((item, index) => (
                    <ChecklistCard
                        key={`second-${checklist.id}-${item.id}-${index}`}
                        checklist={checklist}
                        item={item}
                    />
                ))}

            </div>

        </div>
    );
}

export default ChecklistCarousel;
