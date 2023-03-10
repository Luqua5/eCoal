<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Article;
use App\Models\Tag;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);


        $article = Article::create([
            'title' => 'Tied to 1 in Lens',
            'content' => 'Yesterday, 4th of March, Lens hosted Lille at the Bollaert-Delelis in a match for Round 26 of Ligue 1.
            With the home team still in the race for the title they came into the game strong, dominating the game from the start.
            With Tiago Djaló coming down with an injury at the 13th minute, Lille were forced to make an early substitution with the Portuguese defender now set to miss the rest of the season.
            The home team could finally put their dominance into show when, at the 41st minute, José Fontes accidentally headed a ball into his own net.
            
            In the second half, the away team came strong from the break with high lines and a fast pace creating a lot of chances and dominating the attacking side of the half.
            The tie came in the 69th minute, when the Canadian Jonathan David scored for Lille.
            Chances stacked for both teams until the end of the game with Fofana missing the net by little in the final minutes.
            After the final whistle, Jonathan David took home the MVP award.
            
            
            Lens remains for now in the 3rd place behind Marseille and leaders PSG, and now waiting for tomorrow\'s Monaco, Lille on the other side remains on the 6th place outside of European places by one point.
            ',
            'thumbnailURL' => '/article1.png',
            'mediaType' => 'image',
            'mediaURL' => 'http://localhost:8000/ecoal.jpg',
            'league_id' => '3',
            'leadStory' => false,
        ]);

        $article = Article::create([
            'title' => 'Argentina wins the WC, Mbappé scored a hat-trick',
            'content' => 'Argentina beat France 4-2 on penalties to win the 2022 World Cup after a 3-3 draw in a thrilling final at the Lusail Stadium in Doha, Qatar.

            Argentina raced into a two-goal lead through Lionel Messi and Angel Di Maria before two Kylian Mbappe goals saw holders France pull level in spectacular fashion. Messi put Argentina ahead in extra-time before Mbappe completed his hat trick from the penalty spot to send the game to a penalty shootout.
            
            The result means Messi, playing in his record 26th and final World Cup match, achieves a fairy-tale ending as he lifts the trophy for the first time -- the only major honor to have eluded him in his career.
            
            France were initially sluggish, as Mbappe barely had a touch on the left wing in the opening stages. Meanwhile, his Argentine counterpart Di Maria looked dangerous and earned a penalty on 21 minutes when he went down under a clumsy challenge from France\'s Ousmane Dembele. Messi stepped up to convert and calmly rolled the ball into the net..
            
            Di Maria starred once again shortly after when Messi set midfielder Alexis Mac Allister free down the right wing before he slotted across to an eagerly arriving Di Maria, who struck past France goalkeeper Hugo Lloris.
            
            France were uncharacteristically weak going forward, and by 41 minutes, Deschamps made his first substitutions, bringing on Randal Kolo Muani and Marcus Thuram for Olivier Giroud and Dembele.
            
            Argentina continued to dominate for much of the second half, but France, who took until 71 minutes to register a shot, burst into life late in the game and were rewarded when substitute Kolo Muani won a penalty with little more than 10 minutes remaining, which Mbappe scored.
            Mbappe scored again just 97 seconds later as France won the ball back at the halfway-line before eventually feeding the PSG man with a floated pass on the edge of the box that he volleyed into the bottom right corner.
            Argentina\'s once vibrant attack was then deflated as they desperately held on before Messi, with almost the last kick of regulation time, struck a shot from 25 yards that forced Lloris into a spectacular save, sending the game to extra-time.
            
            The drama did not end there. Argentina thought they had won it when Messi pounced to slot home a parry from Lloris, but France equalized again before time was out as Mbappe completed his hat trick with another penalty.
            
            Mbappe and Messi converted the two opening penalties, but Argentina goalkeeper Emiliano Martinez saved the next two France efforts from Kingsley Coman and Aurelien Tchouameni before Montiel stepped up and converted to help Argentina to a 4-2 win on penalties.',
            'thumbnailURL' => '/article2.png',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'league_id' => '14',
            'leadStory' => false,
        ]);

        $article = Article::create([
            'title' => 'Mbappe refuses to commit future to PSG after Bayern defeat',
            'content' => 'Paris Saint-Germain striker Kylian Mbappe refused to discuss his future following their UCL round-of-16 defeat in Munich on Wednesday.

            Mbappe failed to inspire the Ligue 1 leaders, as they lost 2-0 in the second leg and 3-0 on aggregate.
            
            PSG exit at the round of 16 for the fifth time in the last seven years.
            
            When asked about his future with the French club following this season, the World Cup winner was noncommittal beyond this year.
            
            “No, no, I’m calm. The only thing that matters to me this season is to win Ligue 1 and then we’ll see.
            
            “At the moment, I’m only talking about this season. Nothing else matters to me. We are disappointed,” Mbappe told reporters after the game.',
            'thumbnailURL' => '/article3.png',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'league_id' => '18',
            'leadStory' => false,
        ]);

        $article = Article::create([
            'title' => 'Bayern beat PSG in a battle of giants in the Champions League',
            'content' => 'Paris Saint-Germain crashed out of the UEFA Champions League (UCL) at the last 16 stage for the fifth time in seven seasons, as a 2-0 defeat to Bayern Munich at the Allianz Arena sealed a 3-0 aggregate loss.
            Having controlled the opening stages of the first leg so comprehensively, it was perhaps surprising that Bayern were happy to concede possession early on, trusting their organization to keep the visitors at bay. Christophe Galtier suffered a huge blow before the break when captain Marquinhos was forced off injured.
            
            Bayern’s Leon Goretzka, who had been a personal bulldozer to Lionel Messi’s influence on the first half, had the first sight of goal, as his long-range effort fizzed into the gloves of Gianluigi Donnarumma. The Italian shot-stopper was forced into more serious action on the half-hour mark, as he produced a smart save to deny Jamal Musiala from inside the area. Despite looking far more comfortable than in the first meeting in Paris, Galtier’s men offered very little in terms of attacking threat until a moment of madness from Yann Sommer nearly blew the tie wide open. The Swiss goalkeeper was caught in possession in his own box by Vitinha, but the midfielder failed to capitalize, as his shot was heroically cleared off the line by Matthijs De Ligt.
            
            After the restart, Julian Nagelsmann was left furious with a VAR decision to overturn a Bayern goal. There’d be no doubt about the Rekordmeister opening the scoring on the hour mark though. Marco Verratti was caught in possession on the edge of his own area by Müller, allowing Goretzka to slide in Choupo-Moting for a tap-in to score against his former side and put daylight between the teams.
            
            One of few Bayern players inexperienced on this stage, Sommer showed his worth to defend the lead as he made a fabulous save to deny Sergio Ramos’ header. That was as close as an erratic PSG side would come to a comeback, with Serge Gnabry putting the tie to bed in the 90th minute after a lethal counterattack. Bayern appear a force to be reckoned with, winning all eight of their games in this competition this term, yet to concede a UCL goal on home soil, while they’re unbeaten at the Allianz Arena in all competitions for over a year.',
            'thumbnailURL' => '/article4.png',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'league_id' => '18',
            'leadStory' => false,
        ]);

        $article = Article::create([
            'title' => 'Dortmund have no time to lament Chelsea defeat as derby awaits',
            'content' => 'Dortmund, who were on a 10-game winning run in all competitions in 2023 prior to Tuesday, lost 2-0 at Chelsea and were eliminated. They won 1-0 win in Germany in the first leg.

            With the club joint top in the Bundesliga on 49 points with Bayern Munich, but in second place on goal difference, Terzic said there was no time to bewail the defeat to Chelsea for too long.
            
            "We know we were in good form (coming to Chelsea). But confidence and good form won\'t be enough," Terzic told reporters.
            
            "Our season started in July and we said we want a good run in all three competitions. We dropped out of the Champions League against Chelsea. It is not something you have to feel ashamed of."
            
            "But don\'t get me wrong. Tonight we are really disappointed," Terzic said. "But tomorrow morning we are going to stand up, recover and go for the next one. It is a big derby for us on Saturday."
            
            Few Dortmund fans would remember the Chelsea exit if there was silverware at the end of the season for their club, even fewer would if that included victory at local rivals Schalke on Saturday.
            
            Schalke are unbeaten in their last six league matches, having won the last two, and have climbed off last place to 19 points and into 17th place, level on points with Hoffenheim and VfB Stuttgart in 16th and 15th respectively.
            
            "At the end of May we will see what we deserve," Terzic said. "This is what we want to do. We don\'t want anything for granted but we will see at the end of May."',
            'thumbnailURL' => '/article5.png',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'league_id' => '18',
            'leadStory' => false,
        ]);

        $article = Article::create([
            'title' => 'Liverpool back to winning ways after taming Wolves',
            'content' => 'A fourth meeting of the calendar year between the sides meant they spent little time trying to figure each other out and an end-to-end opening to the contest took hold.

            The early scare seemed to shake Liverpool into life and the home side soon regained composure, controlled possession and started to create chances. But the first-half witnessed the Reds display a similar lack of ruthlessness that’s seen them fail to score in four of their last six Premier League matches and Harvey Elliot’s flicked header from six yards out flew well wide to further illustrate the host\'s recent troubles in front of goal.
            
            Wolves struggled to generate any real momentum in the second period and faced difficulty trying to break down a Liverpool side that kept three consecutive league clean sheets.
            
            Ultimately, the solid defense gave the Reds a platform to build upon and Darwin Nunez thought he’d finally found the finishing touch with his third goal in as many matches until VAR disallowed the strike, ruling that Diogo Jota committed a foul in the build up.
            
            That setback did not deter the inevitable Liverpool onslaught however, and Van Dijk’s lashed in from close range from Jota’s low cross before Salah sealed the points by tapping in Konsta­ntinos Tsimikas’ drilled pass across the goalmouth.
            
            It was fitting that the 3-0 hammering at Wolves three weeks ago led to a run of four clean sheets, including three wins to nil, in the league for Jurgen Klopp’s Liverpool side and the Reds will be confident of mounting a charge for the top four with this latest boost.
            
            Wolves’ inconsistency continues to hamper their top-flight security and a three-match winless run leaves Julen Lopetegui’s side just three points off the relegation places.',
            'thumbnailURL' => '/article6.png',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'league_id' => '6',
            'leadStory' => false,
        ]);

        $article = Article::create([
            'title' => 'Preview: Bournemouth vs. Liverpool ',
            'content' => 'Having both been involved in two of the season\'s most electrifying Premier League matches last week, Bournemouth and Liverpool renewed hostilities at the Vitality Stadium on Saturday lunchtime.

            The Cherries let a two-goal lead slip in a heartbreaking 3-2 loss to leaders Arsenal, while Jurgen Klopp\'s merciless men humiliated Manchester United 7-0 at Anfield.
            
            Setting the tone for the match after just 9.11 seconds, Bournemouth scored the second-quickest goal in Premier League history at the Emirates through Philip Billing, and the rest of the five-goal thriller would appropriately live up to the billing.
            
            The traveling Cherries faithful were in dreamland when Marcos Senesi doubled their side\'s lead in the second half, but their two-goal advantage was quickly wiped out by Thomas Partey and Ben White before a last-gasp Reiss Nelson strike sparked arguably the wildest celebrations that the Emirates has ever seen.
            
            Heads were in hands for the disconsolate Bournemouth players, but Gary O\'Neil had every right to feel proud about his side\'s efforts against the league leaders, having also bravely attacked Manchester City the weekend before during a 4-1 defeat.
            
            However, bravery alone does not put points on the board for Bournemouth, who are rooted to the foot of the Premier League table - behind Southampton on goal difference - but they only have a one-point gap to make up to Leeds United in 17th place and are by no means down and out.
            
            Ending a four-game Premier League winless run at the Vitality Stadium would be the first step towards clambering away from danger for the Cherries, who have now suffered three defeats when leading by two goals this season - squandering 17 points from winning positions in total.
            
            Only Leicester City (19) have let more points slip away from them while in the ascendancy than Bournemouth, whose Anfield nightmares would have certainly been triggered by witnessing their upcoming opponents embarrass Man United in astonishing fashion.
            
            From Mohamed Salah becoming their all-time Premier League goalscorer, Roberto Firmino scoring an emotional seventh and Cody Gakpo showing his former admirers exactly what they are missing, Sunday\'s demolition of Manchester United was very nearly the perfect day for Jurgen Klopp.',
            'thumbnailURL' => '/article7.png',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'league_id' => '6',
            'leadStory' => false,
        ]);

        $article = Article::create([
            'title' => 'Felipe Melo expelled in seconds and without touching the ball',
            'content' => 'Felipe Melo is always arm in arm with controversy and last night he was back in the spotlight: at Fla-Flu, when the visitors had already turned the score around (1-0 to 1-2), the experienced midfielder came on in the 88th minute to help manage the advantage and was less than a minute into the game, without touching the ball once.
            The reason for the direct red was a very hard tackle by Gerson on Giovanni. Confusion ensued and Felipe Melo ran to the spot in his style, with a few pushes in between. The referee ended up deciding on his direct expulsion, causing the anger of the Brazilian international.
            ',
            'thumbnailURL' => '/article8.png',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'league_id' => '5',
            'leadStory' => false,
        ]);

        $article = Article::create([
            'title' => 'Arsenal boss Mikel Arteta refuses to answer whether Gabriel Jesus has traveled to Lisbon',
            'content' => 'The Brazil forward has not featured since requiring surgery on a knee injury suffered at the World Cup but has recently returned to training.

            A potential return date has been a closely-guarded secret within London Colney and Arteta has already batted away questions on whether he expects Jesus back before the international break later this month.
            
            UEFA rules mean the opening 15 minutes of training on the eve of matches are open to the media and Jesus was seen working alongside his team-mates in preparation.
            But Arteta was tight-lipped when he arrived in Lisbon, insisting any news surrounding his squad would be released ahead of kick-off.
            
            "News on the squad will be tomorrow," he said. "We have brought a few players and you will see tomorrow who is available."
            
            Arsenal\'s official social media channels showed a number of players boarding the flight to Lisbon, which was delayed due to adverse weather in the UK, and Jesus was not one of those filmed.
            
            When directly asked if Jesus had traveled, an Arsenal spokesperson also refused to comment.
            
            Arteta did, however, say he would not fast-track Jesus back into action despite having Eddie Nketiah and Leandro Trossard missing through injury.
            
            "We will try not to rush him back," he said. "We will try to make a fair assessment between what he needs and when is comfortable and as well giving the team a boost that it\'s going to need in the next few weeks for sure.
            
            "Everything is going well, he needs time as well to get himself that confidence and that physical state that is necessary to compete with a free mind and once he\'s free to do that, we will throw him in."',
            'thumbnailURL' => '/article9.png',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'league_id' => '6',
            'leadStory' => false,
        ]);
        
        $article = Article::create([
            'title' => 'Real Madrid: Finally good news for Benzema!',
            'content' => 'After an absolutely exceptional 2021-2022 season, Karim Benzema is going through a more mixed 2022-2023 year. Although he is still effective (18 goals and 5 assists in 27 matches), the French international multiplies the physical problems, which notably prevented him from taking part in the 2022 World Cup. The latest dates back to Sunday, during the draw of Real Madrid (0-0) in the home of Bétis Sevilla .
            The blow received in the ankle made the french international have to train indoors for the week. But as Marca and The Athletic indicate, this discomfort would not be so serious in the end. Although he should once again be rested against Espanyol Barcelona this Saturday, his 10th missed match in La Liga this season, the 35-year-old striker should however be able to hold his place for the round of 16 second leg of Champions League against Liverpool.
            In the first leg, the Merengues had crushed the Reds at Anfield (5-2), thus taking a serious opportunity of qualifying for the quarter-finals.',
            'thumbnailURL' => '/article10.png',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'league_id' => '11',
            'leadStory' => false,
        ]);
       
    }
}
