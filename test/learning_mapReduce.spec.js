

//start with a failing test so that can ensure the test system is working. 


describe("Map Reduce on tweets", function(){
	it("Can count the occurences of #archaeology", function(){
		var tweets = [
			{
				user: "@ilovestrawberries", 
				text: "Check out these #strawberries I had for breakfast.",
				hashtags: ["strawberries"]
			},
			{
				user: "@diggingfordeadpeople", 
				text: "Just found #fossilised access card amongst papers with strange symbols! Wonder what they were up to.",
				hashtags: ["fossilised"]
			},
			{
				user: "@jobnut", 
				text: "Latest pics of my #digsite - What are those #potteryshards?",
				hashtags: ["digsite","potteryshards"]
			},
			{
				user: "@diggingfordeadpeople", 
				text: "#digsite breakfast - like #LOTR, we're having second breakfast. #hobbitlife",
				hashtags: ["digsite","LOTR","hobbitlife"]
			},
			{
				user: "@ilovestrawberries", 
				text: "Look at them grow! #greenthumbs #strawberries",
				hashtags: ["greenthumbs","strawberries"]
			},
			{
				user: "@jobnut", 
				text: "This is what a real #archaeology #digsite looks like guys. #deadpeoplearemyfriends",
				hashtags: ["archaeology","digsite","deadpeoplearemyfriends"]
			}
		];

		var related = ["archaelogy","digsite","potteryshards","fossilised"];

		/*
		 * Your mission, should you choose to accept it, will be to use map and 
		 * reduce to count how many archaeology hashtags have been used in the
		 * above tweets. Note that if two related hashtags are used in the same
		 * tweet, they count as two separate use for our purpose.
		 */

		 /*
		  * Use the filter function to find how many archaeology related hashtags 
		  * there are. 
		  * For every tweet, need to extract the hashtags.
		  * Out of the hashtags, figure out how to count the no. of archaeology
		  * hastags. Then count them up together.
		  * Map reduce is how tehy do it in real life. Can do the mapping 
		  * stage in parallel.
		  */

		 //INTENTIONALLY BLANK - FILL IN
		 var related_tweets_count = _____;

		 expect(related_tweets_count).to.equal(6);
	})
})