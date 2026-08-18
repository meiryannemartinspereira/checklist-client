import ChecklistCard from "./ChecklistCard";

function ChecklistCarousel({ checklists }) {

    const items = checklists.flatMap((checklist) =>
        (checklist.itemChecklistDto ?? []).map((item) => ({
            checklist,
            item
        }))
    );

    if (items.length === 0) {

        return (
            <div className="dashboard-message">
                Nenhum aluno possui checklist registrado.
            </div>
        );
    }

    const renderCards = (suffix) =>
        items.map(({ checklist, item }, index) => (

            <ChecklistCard
                key={`${suffix}-${checklist.id}-${item.id}-${index}`}
                checklist={checklist}
                item={item}
            />

        ));

    return (
        <div className="checklist-carousel">

            <div className="checklist-carousel-track">

                {renderCards("first")}
                {renderCards("second")}

            </div>

        </div>
    );
}

export default ChecklistCarousel;