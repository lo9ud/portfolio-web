/**Base for all cards */
function BaseCard({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={'px-2 py-1 min-h-16 ' + className}>
            <div className="w-full h-full rounded-md rounded-tl-none">
                {children}
            </div>
        </div>
    );
}
/**Dispatches across all card types depending on the number of lists of children passed to it
 * i.e. For a 1xn list, a full `Card`, for a 2xn list, two `HalfCard`s each with one of the two lists and et cetera
 * 
 * @param children
 * 
 * The list of lists containing the children to be dispatched over
 */
export function DispatchedCard({ childLists }: { childLists: React.ReactNode[][] }) {
    let cardType: ({ children }: { children: React.ReactNode }) => React.ReactNode
    switch (childLists.length) {
        case 1:
            cardType = Card
            break
        case 2:
            cardType = HalfCard
            break
        case 3:
            cardType = ThirdCard
            break
        default:
            if (childLists.length%3 === 0){
                cardType = ThirdCard
            } else if (childLists.length%2 === 0){
                cardType = HalfCard
            } else {
                cardType = (() => {
                    let counter = -1
                    return (childList) => {
                        counter++
                        if(counter % 5 < 2){
                            return HalfCard(childList)
                        } else {
                            return ThirdCard(childList)
                        }
                    }
                })()
            }
    }
    let retval: Array<React.ReactNode> = Array.from(childLists, (childList, k) => { return cardType({ children: childList }) })
    return retval
}

export function Card({ children }: { children: React.ReactNode }) {
    return <BaseCard className="w-full">{children}</BaseCard>;
}
export function HalfCard({ children }: { children: React.ReactNode }) {
    return <BaseCard className="w-1/2">{children}</BaseCard>;
}
export function ThirdCard({ children }: { children: React.ReactNode }) {
    return <BaseCard className="w-1/3">{children}</BaseCard>;
}
