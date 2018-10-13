package Tests;
import static org.hamcrest.CoreMatchers.instanceOf;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;
import org.junit.Test;

public class ReportGeneration {
	private String developer = "Vinod";

	@Test
	public void instanceOfTest() {
		assertThat(new ArrayList(), instanceOf(List.class));
	}

	@Test
	public void assertTrueTest() {
		assertTrue(true);
	}

	@Test
	public void equalToTest() {
		assertThat(developer, is("Vinod"));
	}
	
	@Test
	public void failTest() {
		assertThat(developer, is("Any"));
	}
}
