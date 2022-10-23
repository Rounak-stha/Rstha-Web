import ColorCirle from "../AtomsAndMolecules/ColorCircle";

const IDS_1 = ['1', '2', '3']
const IDS_2 = ['5', '6', '7', '8']
const IDS_3 = ['10', '11', '12', '13']

export default function ColorPallete({ colors }) {
    return (
        <div>

            <div className="flex">
                <div className="bg-back-light dark:bg-back-dark rounded-full p-1">
                    <ColorCirle border={false} style={{ backgroundColor: colors[0]}}  />
                </div>
                <div className="bg-back-light dark:bg-back-dark rounded-full p-1 relative -left-8">
                    <ColorCirle border={false} style={{ backgroundColor: colors['05'] }}  />
                </div>
                <div className="flex relative -left-8">
                    {
                        IDS_1.map(id => (
                            <div key={'plallete-'+id} style={{ left: -26 * id }} className="bg-back-light dark:bg-back-dark rounded-full p-1 relative">
                                <ColorCirle border={false} style={{ backgroundColor: colors[id] }}  />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex">
                <div className="bg-back-light dark:bg-back-dark rounded-full p-1">
                    <ColorCirle border={false} style={{ backgroundColor: colors[4]}}  />
                </div>
                <div className="flex">
                    {
                        IDS_2.map(id => (
                            <div key={'plallete-'+id} style={{ left: -26 * (id - 4) }} className="bg-back-light dark:bg-back-dark rounded-full p-1 relative">
                                <ColorCirle border={false} style={{ backgroundColor: colors[id] }}  />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex">
                <div className="bg-back-light dark:bg-back-dark rounded-full p-1">
                    <ColorCirle border={false} style={{ backgroundColor: colors[9]}}  />
                </div>
                <div className="flex">
                    {
                        IDS_3.map(id => (
                            <div key={'plallete-'+id} style={{ left: -26 * (id - 9) }} className="bg-back-light dark:bg-back-dark rounded-full p-1 relative">
                                <ColorCirle border={false} style={{ backgroundColor: colors[id] }}  />
                            </div>
                        ))
                    }
                </div>
            </div>
            <ColorCirle border={false} style={{ backgroundColor: colors[14] }}  />
        </div>
    )
}