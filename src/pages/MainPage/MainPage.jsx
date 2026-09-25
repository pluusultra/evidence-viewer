import { useState } from "react";
import EvidenceViewer from "../../components/EvidenceViewer/EvidenceViewer.jsx";
import styles from "./MainPage.module.scss";
import { evidenceMocks } from "../../mocks/evidence.js";

export default function MainPage() {
    const [selectedEvidence, setSelectedEvidence] = useState(null);

    return (
        <div className={styles.backgroundOverlay}>
            <div className={styles.content}>
                {!selectedEvidence &&
                    evidenceMocks.map((evidence) => (
                        <button
                            className={styles.optionsButton}
                            key={evidence.id}
                            onClick={() => setSelectedEvidence(evidence)}
                        >
                            Открыть {evidence.type}
                        </button>
                    ))}
                {selectedEvidence?.type && (
                    <EvidenceViewer
                        evidence={selectedEvidence}
                        onClose={() => setSelectedEvidence(null)}
                    />
                )}
            </div>
        </div>
    );
}
