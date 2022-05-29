import Typography from "@mui/material/Typography";
import useFirstVisit from "common/hooks/useFirstVisit";

const Description = () => {
    const firstVisit = useFirstVisit()

    return (
        <div className="h-[40vh] bg-gray-800 flex flex-col justify-evenly items-center py-8">
            <Typography variant="h1" component="h1" className="text-gray-300">
                Pokémon
            </Typography>
            <div className="text-gray-300">
                <Typography variant="subtitle1" component="h2">
                    Explore the fantastic world of Pokémons.
                </Typography>
                <Typography variant="body1" component="div">
                    Search the list for Pokémons that have always interested you or filter directly by them.
                </Typography>
                {!firstVisit && (
                    <Typography variant="body1" component="div">
                        Welcome back!
                    </Typography>
                )}
            </div>
        </div>
    )
}

export default Description