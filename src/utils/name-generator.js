// Used primarily to come up with funny names for new games.

const adjectives = [
  `agreeable`,
  `ancient`,
  `brave`,
  `bumpy`,
  `calm`,
  `chubby`,
  `cool`,
  `cuddly`,
  `delightful`,
  `dusty`,
  `eager`,
  `fluffy`,
  `great`,
  `intrepid`,
  `jolly`,
  `lively`,
  `lovely`,
  `melodic`,
  `noisy`,
  `proud`,
  `salty`
];

const animals = [
  `aardvark`,
  `aardwolf`,
  `albatross`,
  `alligator`,
  `alpaca`,
  `anaconda`,
  `angelfish`,
  `anglerfish`,
  `ant`,
  `ant`,
  `anteater`,
  `antelope`,
  `antlion`,
  `ape`,
  `ape`,
  `aphid`,
  `armadillo`,
  `arrow crab`,
  `asp`,
  `baboon`,
  `badger`,
  `bald eagle`,
  `bandicoot`,
  `barnacle`,
  `barracuda`,
  `basilisk`,
  `bass`,
  `basset hound`,
  `bat`,
  `beaked whale`,
  `bear`,
  `beaver`,
  `bee`,
  `beetle`,
  `bird`,
  `bison`,
  `black panther`,
  `black widow spider`,
  `blackbird`,
  `blue bird`,
  `blue jay`,
  `blue whale`,
  `boa`,
  `boar`,
  `bobcat`,
  `bobolink`,
  `bonobo`,
  `booby`,
  `boston terrier`,
  `bovid`,
  `box jellyfish`,
  `buffalo`,
  `bug`,
  `bull terrier`,
  `bulldog`,
  `butterfly`,
  `buzzard`,
  `camel`,
  `canid`,
  `cape buffalo`,
  `capybara`,
  `carabao`,
  `cardinal`,
  `caribou`,
  `carp`,
  `cat`,
  `cat`,
  `caterpillar`,
  `catfish`,
  `centipede`,
  `cephalopod`,
  `chameleon`,
  `cheetah`,
  `chickadee`,
  `chicken`,
  `chihuahua`,
  `chimpanzee`,
  `chinchilla`,
  `chipmunk`,
  `cicada`,
  `clam`,
  `clownfish`,
  `cobra`,
  `cockroach`,
  `cod`,
  `cod`,
  `collie`,
  `condor`,
  `constrictor`,
  `coral`,
  `cougar`,
  `cow`,
  `coyote`,
  `crab`,
  `crane`,
  `crane fly`,
  `crawdad`,
  `crayfish`,
  `cricket`,
  `crocodile`,
  `cuckoo`,
  `damselfly`,
  `deer`,
  `dingo`,
  `dog`,
  `dolphin`,
  `dolphin`,
  `donkey`,
  `dormouse`,
  `dove`,
  `dragonfly`,
  `duck`,
  `dung beetle`,
  `eagle`,
  `earthworm`,
  `earwig`,
  `echidna`,
  `eel`,
  `egret`,
  `elephant`,
  `elephant seal`,
  `elk`,
  `elk`,
  `emu`,
  `ermine`,
  `falcon`,
  `ferret`,
  `finch`,
  `firefly`,
  `fish`,
  `flamingo`,
  `flea`,
  `fly`,
  `flyingfish`,
  `fowl`,
  `fox`,
  `frog`,
  `fruit bat`,
  `gazelle`,
  `gecko`,
  `gerbil`,
  `giant panda`,
  `giant squid`,
  `gibbon`,
  `gila monster`,
  `giraffe`,
  `gnat`,
  `gnu`,
  `goat`,
  `goat`,
  `golden retriever`,
  `goldfish`,
  `goose`,
  `gopher`,
  `gorilla`,
  `grasshopper`,
  `great blue heron`,
  `great white shark`,
  `grizzly bear`,
  `ground sloth`,
  `grouse`,
  `guanaco`,
  `guinea pig`,
  `guineafowl`,
  `gull`,
  `guppy`,
  `haddock`,
  `halibut`,
  `hammerhead shark`,
  `hamster`,
  `hare`,
  `harrier`,
  `hawk`,
  `hedgehog`,
  `hermit crab`,
  `heron`,
  `herring`,
  `hippopotamus`,
  `hookworm`,
  `hornet`,
  `horse`,
  `hoverfly`,
  `hummingbird`,
  `humpback whale`,
  `husky`,
  `hyena`,
  `iguana`,
  `impala`,
  `insect`,
  `jackal`,
  `jackal`,
  `jaguar`,
  `jay`,
  `jellyfish`,
  `kangaroo`,
  `kangaroo mouse`,
  `kangaroo rat`,
  `kingfisher`,
  `kite`,
  `kiwi`,
  `koala`,
  `koi`,
  `komodo dragon`,
  `krill`,
  `labrador retriever`,
  `ladybug`,
  `lamprey`,
  `lark`,
  `leech`,
  `lemming`,
  `lemur`,
  `leopard`,
  `leopon`,
  `lion`,
  `lizard`,
  `llama`,
  `lobster`,
  `locust`,
  `locust`,
  `loon`,
  `louse`,
  `louse`,
  `lungfish`,
  `lynx`,
  `macaw`,
  `mackerel`,
  `magpie`,
  `mallard`,
  `mammoth`,
  `manatee`,
  `mandrill`,
  `manta ray`,
  `marlin`,
  `marmoset`,
  `marmot`,
  `marsupial`,
  `marten`,
  `mastiff`,
  `mastodon`,
  `meadowlark`,
  `meerkat`,
  `mink`,
  `minnow`,
  `mite`,
  `mockingbird`,
  `mole`,
  `mollusk`,
  `mongoose`,
  `monitor lizard`,
  `monkey`,
  `moose`,
  `mosquito`,
  `moth`,
  `mountain goat`,
  `mouse`,
  `mule`,
  `muskox`,
  `muskrat`,
  `narwhal`,
  `newt`,
  `nightingale`,
  `ocelot`,
  `octopus`,
  `old english sheepdog`,
  `opossum`,
  `orangutan`,
  `orca`,
  `ostrich`,
  `otter`,
  `owl`,
  `ox`,
  `oyster`,
  `panda`,
  `panther`,
  `parakeet`,
  `parrot`,
  `parrotfish`,
  `partridge`,
  `peacock`,
  `pelican`,
  `penguin`,
  `perch`,
  `peregrine falcon`,
  `persian cat`,
  `pheasant`,
  `pig`,
  `pigeon`,
  `pike`,
  `pilot whale`,
  `pinniped`,
  `piranha`,
  `planarian`,
  `platypus`,
  `polar bear`,
  `pony`,
  `poodle`,
  `porcupine`,
  `porpoise`,
  `portuguese man o' war`,
  `possum`,
  `prairie dog`,
  `prawn`,
  `praying mantis`,
  `primate`,
  `puffin`,
  `pug`,
  `puma`,
  `python`,
  `quail`,
  `quelea`,
  `quokka`,
  `rabbit`,
  `raccoon`,
  `rainbow trout`,
  `rat`,
  `rattlesnake`,
  `raven`,
  `ray (batoidea)`,
  `ray (rajiformes)`,
  `red panda`,
  `reindeer`,
  `rhinoceros`,
  `right whale`,
  `roadrunner`,
  `rodent`,
  `rook`,
  `rooster`,
  `roundworm`,
  `saber-toothed cat`,
  `sailfish`,
  `saint bernard`,
  `salamander`,
  `salmon`,
  `sardine`,
  `sawfish`,
  `scale insect`,
  `scallop`,
  `scorpion`,
  `sea lion`,
  `sea slug`,
  `seahorse`,
  `seal`,
  `serval`,
  `setter`,
  `shark`,
  `sheep`,
  `shrew`,
  `shrimp`,
  `siamese cat`,
  `silkworm`,
  `silverfish`,
  `skink`,
  `skunk`,
  `sloth`,
  `slug`,
  `smelt`,
  `snail`,
  `snake`,
  `snipe`,
  `snow leopard`,
  `sockeye salmon`,
  `sole`,
  `sparrow`,
  `sperm whale`,
  `spider`,
  `spider monkey`,
  `spoonbill`,
  `squid`,
  `squirrel`,
  `star-nosed mole`,
  `starfish`,
  `steelhead trout`,
  `stingray`,
  `stoat`,
  `stork`,
  `sturgeon`,
  `sugar glider`,
  `swallow`,
  `swan`,
  `swift`,
  `swordfish`,
  `swordtail`,
  `tabby cat`,
  `tahr`,
  `takin`,
  `tapir`,
  `tarantula`,
  `tarsier`,
  `tasmanian devil`,
  `termite`,
  `tern`,
  `terrier`,
  `thrush`,
  `tick`,
  `tiger`,
  `tiger shark`,
  `tiglon`,
  `toad`,
  `tortoise`,
  `toucan`,
  `trapdoor spider`,
  `tree frog`,
  `trout`,
  `tuna`,
  `turkey`,
  `turtle`,
  `tyrannosaurus`,
  `urial`,
  `vampire bat`,
  `vampire squid`,
  `vicuna`,
  `viper`,
  `vole`,
  `vulture`,
  `wallaby`,
  `walrus`,
  `warbler`,
  `wasp`,
  `water buffalo`,
  `weasel`,
  `weasel`,
  `whale`,
  `whippet`,
  `whitefish`,
  `whooping crane`,
  `wild pig`,
  `wildcat`,
  `wildebeest`,
  `wolf`,
  `wolverine`,
  `wombat`,
  `woodchuck`,
  `woodpecker`,
  `worm`,
  `wren`,
  `x-ray fish`,
  `xerinae`,
  `yak`,
  `yellow perch`,
  `yellowjacket`,
  `zebra`,
  "zebra finch"
];

module.exports = function generateName() {
  let apos = (Math.random() * adjectives.length) | 0;
  let adjective = adjectives[apos];

  let npos = (Math.random() * animals.length) | 0;
  let animal = animals[npos];

  return `${adjective} ${animal}`.toLowerCase();
};