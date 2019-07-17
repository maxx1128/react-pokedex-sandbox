import pullID from "./../services/getIndexFromUrl";

const getEvolutionMethod = (evolution) => {
  let evo_result = '';

  if ( evolution.trigger.name == 'level-up' && evolution.min_level ) { evo_result += 'level up '; }
  if ( evolution.min_level ) { evo_result += `to level ${evolution.min_level} `; }
  if ( evolution.trigger.name == 'trade' ) { evo_result += 'trade '; }
  if ( evolution.item ) { evo_result += `use ${evolution.item.name} `; }
  if ( evolution.trade_species ) { evo_result += `with ${evolution.trade_species.name} `; }
  if ( evolution.min_happiness ) { evo_result += 'with max happiness '; }
  if ( evolution.min_beauty ) { evo_result += 'with max beauty '; }
  if ( evolution.held_item ) { evo_result += `while holding ${evolution.held_item.name} `; }
  if ( evolution.time_of_day ) { evo_result += `during the ${evolution.time_of_day}time `; }
  if ( evolution.location ) { evo_result += `at ${evolution.location.name} `; }
  if ( evolution.gender ) { evo_result += `if ${evolution.gender == 1 ? 'female' : 'male'} `; }
  if ( evolution.known_move ) { evo_result += `if knows ${evolution.known_move.name} `; }
  if ( evolution.known_move_type ) { evo_result += `if knows a ${evolution.known_move_type.name} move `; }
  if ( evolution.party_species ) { evo_result += `with ${evolution.party_species.name} in party `; }
  if ( evolution.min_affection ) { evo_result += `with ${evolution.min_affection} affection hearts `; }
  if ( evolution.turn_upside_down ) { evo_result += 'with device upside-down '; }
  if ( evolution.needs_overworld_rain ) { evo_result += 'in a rainy area '; }
  if ( evolution.relative_physical_stats || evolution.relative_physical_stats === 0 ) {
    if (evolution.relative_physical_stats == 1) {
      evo_result += 'with higher attack than defense ';
    } else if (evolution.relative_physical_stats == -1) {
      evo_result += 'with higher defense than attack ';
    } else {
      evo_result += 'with equal attack and defense ';
    }
  }

  return evo_result.trim().replace(/-/g, ' ');
}

const cleanUpEvolutionDetails = (details) => {
  if (details.length < 1) { return null; }
  return details.map(evo => getEvolutionMethod(evo)).filter(item => item !== '');;
};

const cleanUpStage = (stage) => ({
  name: stage.species.name,
  id: pullID(stage.species.url),
  evolution_details: cleanUpEvolutionDetails(stage.evolution_details)
});

const cleanAllStages = (stages) => stages.map(stage => cleanUpStage(stage));

const gatherNextStage = (currentStage) => currentStage.reduce((nextStages, currentStage) => [...currentStage.evolves_to, ...nextStages], []);

export default (data) => {
  const stage1 = [data],
        stage2 = gatherNextStage(stage1),
        stage3 = gatherNextStage(stage2),
        allStages = [cleanAllStages(stage1), cleanAllStages(stage2), cleanAllStages(stage3)]
                      .filter(stage => stage.length > 0);

  return allStages;
};
