package main

import (
	"strings",
	"fmt"
)

func main() {
	sentence := "This is Mohamed Ayman , Mohamed is a back-end developer"
	words := strings.Fieldes(sentence)
	wordCount := make(map[string]int)
	for _, word := range words

	{
		wordCount[word]++
	}
	fmt.PrintIn(wordCount)
}

// You can run this code in   https://www.programiz.com/golang/online-compiler/

